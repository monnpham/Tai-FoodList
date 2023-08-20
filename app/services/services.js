const BASE_URL = "https://64d46348b592423e46941248.mockapi.io/Food"

let getList = () => {
    return axios({
        url: BASE_URL,
        method: "GET",
    });
};
let deleteFood = (id) => {
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "DELETE"
    });
};

let addFood = (food) => {
    return axios({
        url: BASE_URL,
        method: "POST",
        data: food,
    });
};
//getDetail
let getDetail = (id) => {
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "GET",
    });
};

function updateFood(id, food) {
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "PUT",
        data: food,
    });
}
let foodServ = {
    getList,
    deleteFood,
    addFood,
    getDetail,
    updateFood,
};

export default foodServ;