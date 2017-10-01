
import React from 'react';

import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { FormattedDate } from 'react-intl';

class Topics extends React.Component {
  componentWillMount() {
    const temps = [];
    [...this.props.route.blogs].forEach((blog) => {
      if (blog[1].tags.includes(this.props.params.topic)) {
        temps.push(blog);
      }
    });
    this.setState({ blogs: temps });
    this.setState({ topic: this.props.params.topic });
  }

  componentWillReceiveProps(nextProps) {
    const temps = [];
    [...nextProps.route.blogs].forEach((blog) => {
      if (blog[1].tags.includes(nextProps.params.topic)) {
        temps.push(blog);
      }
    });
    this.setState({ blogs: temps });
    this.setState({ topic: nextProps.params.topic });
  }

  render() {
    return (
      <DocumentTitle title={this.state.topic || 'Untitled'}>
        <div className='container'>
          <h2>Tags: <small className='highlight'>#{this.state.topic}</small></h2>
          <ul>
            {
              [...this.state.blogs].map(blog =>
                <li key={blog[0]} className='blog-block'>
                  <div className='publish-time'>
                    <FormattedDate value={blog[1].date || Date.now()}
                      year='numeric'
                      month='long'
                      day='2-digit'
                      className='blog-date'/>
                  </div>
                  <Link to={`/${blog[0]}`} className="blog-name btn btn-link">{blog[1].title || blog[1] } </Link>
                  <div className='row'>
                    {
                      [...blog[1].tags].map(tag =>
                        <Link key={blog[1] + tag} to={`/tag/${tag}`} className="tag">#{tag}</Link>,
                      )
                    }
                  </div>
                </li>,
              )
            }
          </ul>
        </div>
      </DocumentTitle>
    );
  }
}

export default Topics;
