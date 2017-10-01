
import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { FormattedDate } from 'react-intl';

class Blog extends React.Component {
  componentWillMount() {
    this.setState({ blog: this.props.route.blog });
  }

  render() {
    return (
      <DocumentTitle title={this.state.blog.title || 'Untitled' }>
        <div className="container">
          <div className='blog-header'>
            <h2>{this.state.blog.title || 'Untitled' }</h2>
            <div className='sub-blog-header'>
              <FormattedDate value={this.state.blog.date || Date.now()}
                year='numeric'
                month='long'
                day='2-digit'/>
            </div>
            <div>
              {
                [...this.state.blog.tags].map(tag =>
                  <Link key={this.state.blog.title + tag} to={`/tag/${tag}`} className="tag-menu">#{tag}</Link>,
                )
              }
            </div>
          </div>
          <div className='markdown-body' dangerouslySetInnerHTML={{ __html: this.state.blog.__content }} />
          <div className="row">
            <p>
              Share
            </p>
            <Link to='/' className='btn btn-link'>← Back to blog</Link>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Blog;
