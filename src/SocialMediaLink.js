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
        const socialMediaType = this.state.socialMediaType;
        let imageTagCode;
        if(socialMediaType == 'instagram'){
            imageTagCode = <img src={require(`${componentSocialMediaIconLink}`)} alt={altText}></img>
        }
        else if(socialMediaType == 'linkedin'){

        }        

        return (
            <div className="SocialMediaLink">
                <div className='MediaIconBox'>
                  {imageTagCode}
                </div>
            </div>
          );
      

    }
  }
  
export default SocialMediaLink;