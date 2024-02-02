const API = `http://localhost:9000`;

const GetData = async (path) => {

    path = API + path

    return await fetch(path).then(res => res.json());

}

const PostData = async (path, data) => {

    path = API + path

    return await fetch(path, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

const PatchData = async (path, id, data) => {

    path = API + path + "/" + id;

    return await fetch(path, {
        method: "PATCH",
        body: JSON.stringify(data)
    }).then(res => res.json());
}

const DeleteData = async (path, id) => {

    path = API + path + "/" + id;

    return await fetch(path, {
        method: "DELETE",
    }).then(res => res.json());
}

const RenderData = () => {

    const userName = document.querySelector("#car-name");

    const userEmail = document.querySelector("#car-age");

    const userComment = document.querySelector("#car-model");

    const btnPost = document.querySelector("#post");

    const createUser = {
        name: "Name of Car",
        age: "Age of Car",
        body: "Model of Car"
    }

    userName.addEventListener("input", () => createUser.name = userName.value);

    userEmail.addEventListener("input", () => createUser.age = userEmail.value);

    userComment.addEventListener("input", () => createUser.model = userComment.value);

    btnPost.addEventListener("click", () => {
        PostData("/posts", createUser).then(() => alert("Posted")).catch(error => {
            alert("Not Posted");
            console.error(error);
        })
    })
}

RenderData();

const DeleteUser = () => {
    const userId = document.querySelector("#car-id");

    const btnDelete = document.querySelector("#delete");

    let id = 0;

    userId.addEventListener("input", () => {
        const idValue = Number(userId.value);

        id = isNaN(idValue) ? 1 : idValue;
    });ww

    btnDelete.addEventListener("click", () => {
        DeleteData("/posts", id).then(() => {
            alert("DELETED")
        }).catch(error => {
            alert("Not Deleted or Something is wrong!!!");

            console.error(error);
        })
    });
}

DeleteUser()