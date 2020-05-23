import React from 'react';
import {socialMediaIconLink} from './constants';

class SocialMediaLink extends React.Component {
    constructor(props){
        super(props);
        this.state = {socialMediaType: this.props.website};
    }
    render(){
        let socialMediaIconLinkWordsArray = socialMediaIconLink.split('-');
        socialMediaIconLinkWordsArray[1] = this.state.socialMediaType + '.svg';
        const componentSocialMediaIconLink = socialMediaIconLinkWordsArray[0] + '-' + socialMediaIconLinkWordsArray[1];
  
        
        const altText = this.props.website + ' link';
        const socialMediaLink = this.props.link;
        let imageLinkTagCode;
        //if(socialMediaType == 'instagram'){
          imageLinkTagCode = <a href={socialMediaLink}><img src={require(`${componentSocialMediaIconLink}`)} alt={altText}></img></a>
        return (
            <div className="SocialMediaLink">
                <div className='MediaIconBox'>
                  {imageLinkTagCode}
                </div>
            </div>
          );
      

    }
  }
  
export default SocialMediaLink;