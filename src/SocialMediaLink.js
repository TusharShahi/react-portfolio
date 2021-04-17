import React from 'react';
import { socialMediaIconLink } from './constants';
import Context from './Context';

class SocialMediaLink extends React.PureComponent {

  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = { socialMediaType: this.props.website };
  }

  render() {
    let socialMediaIconLinkWordsArray = socialMediaIconLink.split('-');
    socialMediaIconLinkWordsArray[1] = this.state.socialMediaType + '.svg';
    const componentSocialMediaIconLink = socialMediaIconLinkWordsArray[0] + '-' + socialMediaIconLinkWordsArray[1];


    const altText = this.props.website + ' link';
    const socialMediaLink = this.props.link;
    let imageLinkTagCode;
    //if(socialMediaType == 'instagram'){

    //  imageLinkTagCode = <a href={socialMediaLink}><img src={require(`${componentSocialMediaIconLink}`)} alt={altText}></img></a>
    imageLinkTagCode = <a href={socialMediaLink} rel="noopener noreferrer" target="_blank"><img src={process.env.PUBLIC_URL + componentSocialMediaIconLink} alt={altText}></img></a>
    let mainClassName = "SocialMediaLink " + this.context.theme;
    return (
      <div className={mainClassName}>
        <div className='MediaIconBox'>
          {imageLinkTagCode}
        </div>
      </div>
    );


  }
}

export default SocialMediaLink;