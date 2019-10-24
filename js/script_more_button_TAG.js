
//More button
const e = React.createElement;

class MoreButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return "Find out about me!";
      }
  
      return e(
        "btn",
        { onMouseEnter: () => this.setState({ liked: true }) },
        "More!",
      );
      
    }
  }
  const moreButton = document.querySelectorAll("#moreButtonContainer")[0];
ReactDOM.render(e(MoreButton), moreButton);
