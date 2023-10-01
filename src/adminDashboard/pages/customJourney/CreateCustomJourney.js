import { Link } from "react-router-dom";
import Breadcrumb from "../../Breadcrumb";
import { useEffect, useState } from "react";
import Loader from "../../../components/loader/Loader";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../states/actions/productAction";
import { clearError, createCustomJourney, getAllCustomJourney, resetNew } from "../../../states/actions/journeyAction";

const CreateCustomJourney = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, allProducts } = useSelector(state => state.allProducts);
    const { loading: customJourneyLoading, allCustomJournies } = useSelector(state => state.customJournies);
    const { loading: createLoading, success, message, error } = useSelector(state => state.newCustomJourney);

    const [journey, setJourney] = useState({
        journeyName: "",
        maxStage: "",
        productPercent: ""
    });

    const onChangeHandler = (e) => {
        setJourney({ ...journey, [e.target.name]: e.target.value });
    }

    const [productList, setProductList] = useState([]);

    const [breakpoint, setBreakpoint] = useState("");

    const addJourney = (idVal, name, price) => {

        if (!breakpoint) {
            return alert.error("Please enter break points!");
        }

        const newObj = {
            productId: idVal,
            point: breakpoint,
            name: name,
            price: price
        }

        setBreakpoint("");
        setProductList([...productList, newObj]);
    }

    const removeProduct = (removeID) => {
        const updatedList = productList.filter(product => product.productId !== removeID);
        setProductList(updatedList);
    }

    const submitHandler = () => {
        if (!journey.journeyName) {
            return alert.error("Please journey name.");
        }

        dispatch(createCustomJourney(
            journey.journeyName,
            productList,
            journey.maxStage,
            journey.productPercent
        ));
    }

    useEffect(() => {
        if (success) {
            alert.success(message);
            dispatch(resetNew());
            setProductList([]);
            setJourney({
                journeyName: "",
                maxStage: "",
                productPercent: ""
            });
        }

        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        dispatch(getAllCustomJourney());
        dispatch(fetchProducts());
    }, [dispatch, success, message, error, alert]);

    return (
        <>
            {loading || createLoading || customJourneyLoading ? <Loader /> : <></>}
            <Breadcrumb
                icon="fa fa-plus"
                heading="Custom Journey"
                subheading="Customize theogs journey for users"
                isButtons={false}
            />
            <div className="dashboard-content">
                <div className="dashboard-global-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="form-back-btn">
                                    <Link to="/dashboard/users"><i className="fa fa-angle-left"></i>Back</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="dashboard-global-form-group">
                                        <label>Journey Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter journey name"
                                            name="journeyName"
                                            value={journey.journeyName}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="dashboard-global-form-group">
                                        <label>Max Stages Number</label>
                                        <input
                                            type="number"
                                            placeholder="Enter maximun stages"
                                            name="maxStage"
                                            value={journey.maxStage}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="dashboard-global-form-group">
                                        <label>Product Percentage</label>
                                        <input
                                            type="number"
                                            placeholder="Enter product value percentage"
                                            name="productPercent"
                                            value={journey.productPercent}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="custom_journey">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="dashboard-global-form-group">
                                            <label>Product breakpoints</label>
                                            <input
                                                type="number"
                                                placeholder="Enter product breakpoints"
                                                name="breakpoint"
                                                value={breakpoint}
                                                onChange={(e) => setBreakpoint(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        productList.length === 0
                                            ?
                                            <>
                                                <div className="no_journey">
                                                    <h3>There is no product for journey, Please add product to proceed!</h3>
                                                </div>
                                            </>
                                            :
                                            productList.map((data, index) => (
                                                <div className="col-md-4" key={index}>
                                                    <div className="show-listed-journey">
                                                        <h3><span>Product ID:</span>{data.productId}</h3>
                                                        <h3><span>Point:</span>{data.point}</h3>
                                                        <h3><span>Product Name:</span>{data.name}</h3>
                                                        <h3><span>Product Price:</span>{data.price}</h3>
                                                        <div className="show-listed-journey-remove-btn">
                                                            <button onClick={() => removeProduct(data.productId)}><i className="fa fa-times"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="dashboard-form-action">
                                        <button className="create-btn" onClick={() => submitHandler()}>Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="manage-journey">
                                <h3>Available Products</h3>
                                <div className="d-tables">
                                    <div className="d-card">
                                        <div className="d-card-body card-body-padding d-card-body-bg-color">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        allProducts && allProducts.map((data, index) => (
                                                            <tr key={index}>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{data.name}</td>
                                                                <td>{data.price}</td>
                                                                <td className="table-action">
                                                                    <ul>
                                                                        <button>
                                                                            <li className="delete" onClick={() => addJourney(data._id, data.name, data.price)}><i className="fa fa-check"></i></li>
                                                                        </button>
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="manage-journey">
                                <h3>Journies</h3>
                                <div className="d-tables">
                                    <div className="d-card">
                                        <div className="d-card-body card-body-padding d-card-body-bg-color">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Journey Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        allCustomJournies && allCustomJournies.map((data, index) => (
                                                            <tr key={index}>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{ data.journeyName }</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateCustomJourney;