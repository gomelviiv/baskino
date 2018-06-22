import React, {Component} from 'react';
import Header from '../Header';
import './RulesInSite.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from "axios";


class RulesInSite extends Component {
    render() {
        return (
            <div className={"RulesInSite-content"}>
            <div className={"rules-in-site"}>
              <h1>Community Guidelines on TMDb</h1>
          <h3>Things you should do...</h3>
           <b>*</b> Respect everyone, we're all here because we have something in common.<br/><br/>
           <b>*</b> Be polite and welcoming to new users. We were all new once.<br/><br/>
           <b>*</b> Ask for help and provide assistance to others when possible.<br/><br/>
           <b>*</b> Offer constructive criticism or voice a dissenting opinion, but don't be mean or disrespectful.<br/><br/>
           <b>*</b> Feel free to use use Emoji (Emoticons) to convey the tone of your message.<br/><br/>
           <b>*</b> Lead by example. Treat others even better than you expect to be treated yourself and the discussions become a better place for everyone.<br/><br/>
          <h2>Things you should not do...</h2>
          <b>*</b> Do not share or ask for links to copyrighted, non-fair use material.<br/><br/>
          <b>*</b> Do not share any NSFW* content (e.g. links, images, text etc.) on your profile or in forum discussions.<br/><br/>
          <b>*</b> Trolling, abuse, flaming and/or harassment (e.g. personal attacks, name-calling and/or insulting/ridiculing another user) are uncalled for and will not be tolerated. Have discussions based on well-formulated arguments.<br/><br/>
          <b>*</b> Do not post spam** or advertisements on TMDb.<br/><br/>
          <b>*</b> Double posting is frowned upon. Please edit your first post unless a second post is absolutely necessary.<br/><br/>
          <b>*</b> Impersonating another user of TMDb by copying their name and/or avatar is not allowed. Just be your charming self.<br/><br/>
          <h3>General site rules</h3>
          Offensive or distasteful usernames are unnecessary and will either be changed or banned. One account per person is enough. Multiples are unnecessary and will be banned and/or removed. But most importantly; "Be nice or go home!"
            <br/><br/>
          [*] Content that might be considered offensive or too sexually explicit for the wide range of age groups within the TMDb user base. This includes, but is not limited to: erotic (e.g. nudity, implied sexual acts), excessively violent (e.g. gore, torture), bigoted (irrationally hateful content aimed at, or relating to, a group or individual) and harmful (e.g. those flashing seizure images) content.
            <br/><br/>
          [**] Content lacking any purpose or relevance whatsoever; off-topic posts that derail a thread from its original topic.
              </div>
            </div>
        )
    }
}

export default RulesInSite;
