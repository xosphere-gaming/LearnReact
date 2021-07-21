import './tweets.css';

const Tweets = () => {
    return (
        <div id="tweets-container">
        	<div className="tweet">
        		<span className="name" data-name="VulnX"></span>
        		<span className="message">Learn the concept not the tool</span>
        		<span className="likes" data-likes='134'></span>
        	</div>
            <div className="tweet">
                <span className="name" data-name="LiveOverflow"></span>
                <span className="message">Discover weird machines...</span>
                <span className="likes" data-likes='232'></span>
            </div>
            <div className="tweet">
                <span className="name" data-name="PwnFunc"></span>
                <span className="message">Close your files!</span>
                <span className="likes" data-likes='2424'></span>
            </div>
            <div className="tweet">
                <span className="name" data-name="Fireship"></span>
                <span className="message">HTML is a programming language.</span>
                <span className="likes" data-likes='242'></span>
            </div>
            <div className="tweet">
                <span className="name" data-name="Random"></span>
                <span className="message">Some random tweet</span>
                <span className="likes" data-likes='131244'></span>
            </div>
        </div>
    );
};

export default Tweets;