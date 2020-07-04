import React from "react"
import PropTypes from "prop-types"
class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.title}
        {this.props.description}
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
export default Article
