import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { updateRestaurant, clearCurrent } from '../../actions';
// import Preloader from '../../utils/Preloader';



const EditRestModal = (props) => {

    const { current, updateRestaurant, clearCurrent} = props;
    const initialState = {
        restaurantName: '',
        city: '',
        myRating: null,
        user_id: null,
        photoUrl:'',
        stamped: false,
        notes: '',
        id: null


    }
    
    const [restaurant, setRestaurant] = useState(initialState);
    const { restaurantName, city, myRating, user_id, photoUrl, stamped, notes}= restaurant;

    useEffect( () => {
        if (current)
            setRestaurant({
                restaurantName: current.name,
                id: current.res_id,
                city: current.city,
                myRating: Math.round(current.rating),
                user_id: current.user_id,
                notes: current.notes,
                photoUrl: current.photoUrl,
                stamped: current.stamped
                
            })

    },[current]);

    const handleChange = (e) => {
        e.preventDefault();
        setRestaurant( {
            ...restaurant,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckbox = (e) => {
        setRestaurant({
            ...restaurant,
            stamped: !stamped
        })
    }
    const onSubmit= (e) => {
        e.preventDefault();
        updateRestaurant(restaurant);
        setRestaurant(initialState);
        clearCurrent();

        
    }

    // if (isFetching) {
    //     return <Preloader />
        
    // }


    return (
        <div id='EditRestModal' className='modal' style={modalStyle} >
            <div className="modal-content">
                <h4>Edit Passport Restaurant</h4>
                <div className="row">
                    <div className="input-field">
                        
                        <input type='text' name="restaurantName" value={ restaurantName } onChange = {handleChange} />
                        <label htmlFor="restaurantName">Restaurant Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <label htmlFor="city">City</label>
                        <input type='text' name="city" value={city}  onChange = {handleChange} />

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <label htmlFor="myRating">Rating</label>
                        <input type='text' name="myRating" value={myRating} onChange = {handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <label htmlFor="user_id">User ID</label>
                        <input type='text' name="user_id" value={user_id} onChange = {handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <label htmlFor="photoUrl">Photo URL</label>
                        <input type='text' name="photoUrl" value={photoUrl} onChange = {handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" name ='stamped' checked={stamped} 
                                onChange={handleCheckbox} /><span>Stamped</span>
                            </label>
                            
                        </p>
                        

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <label htmlFor="notes">Notes</label>
                        <input type='text' name="notes" value={notes} onChange = {handleChange} />
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} style={{ marginRight: '10px',marginBottomt: '10px',backgroundColor: '#ee6e73'}} className="modal-close btn waves-effect waves-light">Enter</a>
            </div>
        

        </div>
    )
}

const modalStyle = {
    width: '50%',
    height: '100%',
    padding: '20px'
}

const mapStateToProps = state => {
    return {
        current: state.current
        // isFetching: state.isFetching
    }
}
export default connect(mapStateToProps, { updateRestaurant, clearCurrent})(EditRestModal);
