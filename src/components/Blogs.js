
import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { FormattedDate } from 'react-intl';
import { emojify } from 'react-emojione';

class Blogs extends React.Component {
  componentWillMount() {
    this.setState({ blogs: this.props.route.blogs });
  }

  render() {
    return (
      <DocumentTitle title='@pongpolb blog | Home'>
        <div className="container self-intro">
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

export default Blogs;
