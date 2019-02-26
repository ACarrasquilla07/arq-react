import api from "./TodoResource";

const Consumer = ({

    getAll: (handle) => api.getAll()
        .then(data => {
            handle({ isResult: "success", data });
        }).catch(error => {
            console.error(error);
            handle({ isResult: "error", error });
        }),

    update: (item, handle) => api.put(item)
        .then((data) => {
            handle({ isResult: "success", item:data });
        }).catch(error => {
            console.error(error);
            handle({ isResult: "error", error });
        }),

    add: (item, handle) => api.post({item, id: null})
        .then((data) => {
            handle({ isResult: "success", item: data });
        }).catch(error => {
            console.error(error);
            handle({ isResult: "error", error });
        })
});

export default Consumer;


