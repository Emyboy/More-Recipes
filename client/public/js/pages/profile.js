const profile = `<div class="jumbotron profile-jumbo">
            <img width="20%" class='profile-avatar mb-3' src='./img/demo/listing/3.jpg' alt='avatar'/>
            <h3>Username</h3>
            <p>Email@email.com</p>
            <button class="default-btn green">Logout</button>
        </div>

        <div class="container">
            <div style='text-align: center'>
                <legend>Your Favorite Recipes</legend>
            </div>

            <div class="row">
                <div class="card m5 recipe-card shadow" style="width: 18rem;">
                    <img class="card-img-top" src="./img/demo/listing/2.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p>
                        <button onclick="window.location = './details.html'" href="#" class="default-btn green font-color">View</button>
                    </div>
                </div>
            </div>
        </div>`;

export default profile;