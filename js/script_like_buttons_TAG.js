
//Like button
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this!";
    }

    return e(
      "btn",
      { onClick: () => this.setState({ liked: true }) },
      "Click to Like"
    );
  }
}
const likeButton1 = document.querySelectorAll("#likeButtonContainer")[0];
ReactDOM.render(e(LikeButton), likeButton1);

const likeButton2 = document.querySelectorAll("#likeButtonContainer")[1];
ReactDOM.render(e(LikeButton), likeButton2);

const likeButton3 = document.querySelectorAll("#likeButtonContainer")[2];
ReactDOM.render(e(LikeButton), likeButton3);

