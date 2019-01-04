const edit = `<div class="home-body container">
            <div class="section">
                <div class="container">
                    <form method="POST" class="green user-form shadow">
                        <span class="h3 mb-3 font-weight-normal"><h1>Edit Recipe</h1></span>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Ingredient</label>
                            <input type="text" class="form-control user-form-input" id="exampleInputEmail1z" aria-describedby="emailHelp" placeholder="Ingredient">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">About Recipe</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Upload Image</label>
                            <input type="file"/>
                        </div>
                        <button style='color:aliceblue' type="submit" class="btn dark-green">Add</button>
                        <button style='color:aliceblue;background-color: red' type="submit" class="btn">Delete</button>
                    </form>
                </div>
            </div>
        </div>`;
export default edit;