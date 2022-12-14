import axios from "axios";

export async function getCategories(categoryId, sortByLike) {
    const reqUrl = `http://localhost:3000/api/discover/get-all-category/${categoryId}?sortByLike=${sortByLike}`;
    const result = await axios.get(reqUrl);
    if (result.data) {
        return result.data;
    }
}

export async function setFavoriteImage(reqBody) {
    const reqUrl = "http://localhost:3000/api/discover/like";
    reqBody = {};
    const result = await axios.post(reqUrl, reqBody);
    if (result.data) {
        return result.data;
    }
}
