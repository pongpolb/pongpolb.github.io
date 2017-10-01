
import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { FormattedDate } from 'react-intl';
import { emojify } from 'react-emojione';

class About extends React.Component {
  componentWillMount() {
    this.setState({ blogs: this.props.route.blogs });
  }

  render() {
    return (
      <DocumentTitle title='@pongpolb blog | Home'>
        <div className="container self-intro">
          <p>
            Hi there!, My name is Bruno <a href='https://www.facebook.com/pongpolb' className='btn btn-link'>@pongpolb</a>.
            I am <span>Software Engineer</span> at in <a href='http://metromerce.com/' className='btn btn-link'>Metromerce</a>
            , based in <a href='https://goo.gl/maps/pi2wTDKEczo' className='btn btn-link'>Bangkok, Thailand</a>.
          </p>
          <p>
            I&apos;m passion for React, React Native, Javascript, Ruby on Rails, AngularJS, Go.
            <br/>This is where I write about my experiences.
          </p>
          <p>
            Also, <span>Movies & TV Shows</span> Lover. {emojify(':ghost: :D :bear:', { output: 'unicode' })}
          </p>
          <hr/>
          <h2>
            Lastest Posts
          </h2>
          <ul>
            {
              [...this.state.blogs.slice(0, 3)].map(blog =>
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

export default About;
