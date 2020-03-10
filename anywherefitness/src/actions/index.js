import axioswithAuth from "../authentication/axiosWithAuth";

// constant variables
export const FETCH_CLASSES = "FETCH_CLASSES";
export const FETCH_SINGLE_CLASS = "FETCH_SINGLE_CLASS";
export const FETCH_UPDATE_CLASS = "FETCH_UPDATE_CLASS";
export const FETCH_RESERVED_CLASSES = "FETCH_RESERVED_CLASSES";
export const RESERVE_CLASS = "RESERVE_CLASS";

//

export const fetchClasses = () => dispatch => {
  axioswithAuth()
    .get("/classes")
    .then(res =>
      dispatch({
        type: FETCH_CLASSES,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchSingleClass = id => dispatch => {
  axioswithAuth()
    .get(`/${id}`)
    .then(res =>
      dispatch({
        type: FETCH_SINGLE_CLASS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchUpdateClass = item => dispatch => {
  axioswithAuth()
    .put(`/${item.id}`, item)
    .then(res =>
      dispatch({
        type: FETCH_UPDATE_CLASS,
        payload: res.data
      })
    );
};

export const fetchDeleteClass = id => {
  axioswithAuth()
    .delete(`/${id}`)
    .then(res => {})
    .catch(err => console.log(err));
};

export const fetchReservedClasses = () => dispatch => {
  axioswithAuth()
    .get("/classes")
    .then(res =>
      dispatch({
        type: FETCH_RESERVED_CLASSES,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
