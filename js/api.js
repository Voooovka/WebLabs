const BASE_URL = "http://localhost:3000/api/stadions";

const baseRequest = async({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${BASE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

const getAllStadions = async() => {
    const rawResponse = await baseRequest({ method: "GET" });
    return await rawResponse.json();
};

const getStadionById = async(id) => {
    const rawResponse = await baseRequest({ urlPath: `/${id}`, method: "GET" });
    return await rawResponse.json();
};

const searchStadions = async(key) => {
    const rawResponse = await baseRequest({
        urlPath: `?searchKey=${key}`,
        method: "GET",
    });
    return await rawResponse.json();
};

const postStadion = (body) => baseRequest({ method: "POST", body });

const deleteStadion = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });

const editStadion = (id, body) => baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export {
    getAllStadions,
    searchStadions,
    postStadion,
    deleteStadion,
    editStadion,
    getStadionById,
};