import React, { useContext, memo } from 'react';
import { socialMediaIconLink } from './constants';
import Context from './Context';

const SocialMediaLink = memo((props) => {

  const { theme, themeToggler } = useContext(Context);


  let socialMediaIconLinkWordsArray = socialMediaIconLink.split('-');
  socialMediaIconLinkWordsArray[1] = props.website + '.svg';
  const componentSocialMediaIconLink = socialMediaIconLinkWordsArray[0] + '-' + socialMediaIconLinkWordsArray[1];


  const altText = props.website + ' link';
  const socialMediaLink = props.link;
  let imageLinkTagCode;
  //if(socialMediaType == 'instagram'){

  //  imageLinkTagCode = <a href={socialMediaLink}><img src={require(`${componentSocialMediaIconLink}`)} alt={altText}></img></a>
  imageLinkTagCode = <a href={socialMediaLink} rel="noopener noreferrer" target="_blank"><img src={process.env.PUBLIC_URL + componentSocialMediaIconLink} alt={altText}></img></a>
  let mainClassName = "SocialMediaLink " + theme;
  return (
    <div className={mainClassName}>
      <div className='MediaIconBox'>
        {imageLinkTagCode}
      </div>
    </div>
  );


});


export default SocialMediaLink;