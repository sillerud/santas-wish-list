
const WishList = () => {

    const handleOnSubmit = () => {
        console.log("TODO: post the wish")
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                What do you want for christmas?
                <input type="text" id="wish-list-input" name="wish-list-input"/>
                <input type="submit" value="Make a wish!" />
            </label>
        </form>
    );
}

export default WishList;
