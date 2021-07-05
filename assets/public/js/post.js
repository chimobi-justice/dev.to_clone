const postContainer = document.getElementById('postContainer');

const handlePosts = async () => {
    const res = await fetch('data/post.json');
    const data = await res.json();

    let allpost = data.map(post => `
        <div class="card card-body mb-0  bg-white">
            <div class="text-dark pl-2 pt-3 topPostProfileImg"><img src="${post.profile}"> <span class="text-dark">${post.name}</span></div>
            <h3 class="text-dark text-center p-1">${post.title}</h3>
            <p class="text-dark w-75 mx-auto"><small>${post.javaScript} ${post.webdev} ${post.react}</small></p>
            <div class="d-flex justify-content-between w-75 mx-auto pb-2">
                <p class="text-dark m-0"><small>${post.reactions} ${post.comment}</small></p>
                <p class="text-dark m-0"><small>${post.read}</small></p>
            </div>
        </div>
    `).join();

    postContainer.innerHTML = allpost;
}
handlePosts();
