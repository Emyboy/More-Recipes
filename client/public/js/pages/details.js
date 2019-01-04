const details = `<div class="container details">
            <div class="card mb-3 details-card-left">
                <img class="card-img-top" src="./img/demo/listing/16.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.</p>
                    <div class="vote-btn-group btn-group d-flex justify-content-start">
                        <img class='vote-btn' src="./img/icon/black up.png" alt="upvote">
                        <span class="mt-2 ml-2">22</span>
                        <img class='vote-btn mt-2 ml-2' src="./img/icon/black down.png" alt="upvote">
                        <span class="mt-2 ml-2">18</span>
                    </div>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>


            <div class="card details-card-right">
                <div style='text-align: center'>
                    <legend>Reviews</legend>
                    <hr/>
                </div>

                <div class="review-card card d-flex flex-row bd-highlight mb-3">
                    <img width="15%" height='20%'src="./img/demo/listing/3.jpg" alt="avatar" class="review-avatar">
                    <div class="d-flex flex-column bd-highlight ml-2 mb-3">
                        <small>username</small>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim temporibus omnis mollitia! Voluptates, libero impedit delectus deserunt et porro non totam sed earum voluptatibus sequi ab sit, eos enim.</p>
                    </div>
                    <hr/>
                </div>
                <form class="mt-5" method="POST">
                    <input class="default-input" style="width:100%" type="text" placeholder="Enter Review Here"/>
                    <button class="mt-3 default-btn green" style="width:100%">Send</button>
                </form>
            </div>
        </div>`;
export default details;