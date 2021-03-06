import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import ReactTooltip from 'react-tooltip';

class LeadDelivery extends Component {
	constructor() {
		super();
		this.state = {
			gifShowing: true
		}
	}
	resetGif() {
		this.setState({gifShowing: !this.state.gifShowing})
		console.log(this.state.gifShowing);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return(
			<div className="ancestor">
				<div className="chapter-content-body">
					<div className="arrow-wrapper">
						<div className="inner-arrow-wrapper">
							<div className="back-arrow">
								<p data-tip="Step Criteria"><IconButton class_name="arrow" to="/step-criteria" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Outbound Field Mapping"><IconButton class_name="arrow" to="/outbound-field-mapping" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
					<h1 className="title">Lead Delivery</h1>
					<p>Now that your flow has filtered and enhanced your leads, it's time to deliver them somewhere! 
					In this guide, we'll cover delivering our leads by:</p>
					<ul>
						<li>Email Delivery</li>
						<li>Rich Integration Recipient</li>
						<li>Standard Integration Recipient</li>
					</ul>
					<p>There are many recipient options in LeadConduit; <a href="https://support.activeprospect.com/hc/en-us/categories/200350369-LeadConduit" target="_blank">
					take a look</a> to see additional outbound integrations 
					you might use, including batch file recipient and more advanced recipient formatting options.</p>
					<br/>
					<h2>Email Delivery</h2>
					<p>Delivering leads to your email address is a fairly easy way to get started. On the <strong>Steps</strong> page (where you added enhancements earlier in the guide), click the <strong>Add Recipient</strong> button. 
					Scroll down and select the <strong>Email Delivery</strong> option. This will add an email delivery step to your flow.</p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require('../images/new_email_delivery.gif') : require('../images/new_email_deliveryfalse.gif')} alt="Email Delivery" /></p>
					<ReactTooltip place="bottom" type="dark" effect="float"/>
					<p>Select the <strong>Edit Field Mappings</strong> button on this step and enter the email address where you'd like the leads delivered. Comma-separate multiple addresses if 
					more than one person wants to receive these leads. If you add another mapping, you'll be able to further configure your email address with things
					like <strong>Subject</strong> and <strong>Sender Name</strong>. </p>
					<img className="img-background" src={require('../images/emailrequirements.png')} alt="Email Requirements" />
					<p>As long as you provide an email address, LeadConduit will send qualified leads to that address with all of the information 
					collected during the lead’s journey through the flow.</p>
					<br/>
					<h2>Rich Integration Recipients</h2>
					<p>At ActiveProspect, we strive to make getting leads from one place to another as easy as possible for our clients. 
					Not only do we have a massive list of integrations with places where our clients send leads, we’ve recently rolled out 
					rich user interface integrations for a few of our delivery destinations. These <strong>rich integrations</strong> make sending leads 
					from your flow your delivery destination a couple steps easier to set up. In this guide, we’ll show you how to use the 
					MailChimp integration. </p>
					<p>On your flow’s <strong>step editor page</strong>, select <strong>Add Recipient</strong>. 
					Select <strong>create a new custom recipient</strong>, search for and select <strong>MailChimp</strong>, <strong>name</strong> your recipient and click <strong>Next</strong>. 
					You’ll be taken to a screen that asks for your MailChimp API key. If you aren’t sure what that is or where to find it, click 
					on the <strong>How do I find my API key?</strong> link. Once you have your API key, paste it into the input box and click <strong>Next</strong>.</p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require('../images/new_addmailchimp.gif') : require('../images/new_addmailchimpfalse.gif')} alt="Add MailChimp" /></p>
					<ReactTooltip place="bottom" type="dark" effect="float"/>
					<p>You’ll then be prompted to select from a group of mailing lists associated with your account. Select the proper list and click <strong>OK</strong>.</p>
					<img className="img-background" src={require('../images/selectmailchimplist.png')} alt="Select MailChimp List" />
					<p>The MailChimp recipient is now set up and ready to add email addresses to your list! If you’re also collecting data like <strong>First Name</strong>, 
					<strong>Last Name</strong>, or <strong>IP Address</strong>, the MailChimp recipient integration will automatically send those values as well (as long as you’re using the 
					standard fields associated with this data). If you wanted to send other data to your list (e.g. mailchimp_status), you 
					could perform some outbound field mappings to send this data as long as it’s on the list of
					<a href="https://support.activeprospect.com/hc/en-us/articles/115002220163" target="_blank"> fields MailChimp accepts</a>.
					You can learn more about <strong>outbound field mapping</strong> in the next section of this guide.</p>
					<p>Lastly, you’ll want to add a filter after this MailChimp step. If your recipient attempt to MailChimp is unsuccessful, 
					you’ll need a way to be alerted to that fact. Without a filter checking to see if the MailChimp recipient was successful, all 
					of your leads will appear successful in the LeadConduit user interface. Further, if you want to check out all of your events 
					or report on good and bad leads, you need filters marking these leads appropriately. </p>
					<p>Add a filter after the MailChimp step that will reject the lead and stop the flow if the MailChimp recipient outcome <strong><em>is not equal to</em> Success</strong>. </p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require('../images/mailchimpfilter.gif') : require('../images/mailchimpfilterfalse.gif')} alt="MailChimp Filter" /></p>
					<ReactTooltip place="bottom" type="dark" effect="float"/>
					<p>This is how your final filter should look:</p>
					<img className="img-background" src={require('../images/emailrequirements.png')} alt="Email Reqs" />
					<p>Now when a lead enters your flow and isn’t successfully added to the relevant MailChimp list, you’ll be notified visually on 
					your <strong>dashboard</strong>, and the <strong>events page</strong>.</p>
					<br/>
					<h2>Standard Integration Recipients</h2>
					<p>Standard integration recipients ultimately have the same requirements as their <strong>Rich Integration</strong> counterparts, but you’ll 
					need to open the step itself and configure this information manually.</p>
					<p>To configure a standard integration recipient, click the <strong>Add Recipient</strong> button in the <strong>flow editor</strong>, 
					and search for and select a standard integration like Velocify. Once you make this selection, you'll be able to name the recipient and the recipient will be added to the end of your flow. 
					Select your integration, if necessary, and click the <strong>Edit Field Mappings</strong> button. If for some reason you don’t see these options, 
					expand the step options by clicking on its gray header.</p>
					<img className="img-background" src={require('../images/velocifyfields.png')} alt="Velocify Fields" />
					<p>With each standard integration, you’ll need to find the relevant required information associated with the recipient 
					destination. For example, Velocify recipients require that you find and map your <strong>Velocify Client</strong> and 
					<strong> Velocify Campaign ID</strong>.</p>
					<img className="img-background" src={require('../images/requiredvelocifyfields.png')} alt="Required Velocify Fields" />
					<p>Remember to <a href="https://support.activeprospect.com/hc/en-us/articles/115001382483-LeadConduit-Filters" target="_blank">add a filter </a>
					after this recipient step.</p>
					<img className="img-background" src={require('../images/velocifyfilter.png')} alt="Velocify Filter" />




					<h2>Delivery to a Custom Endpoint</h2>
					<p>There are thousands of places you could deliver your leads, and LeadConduit has integrations for some of 
					the most popular of these destinations. If, however, you don’t see a destination you’re looking for in our 
					list of integrated deliveries, you can always configure a custom recipient. </p>
					<p>Setting up a custom recipient requires a little more legwork on your part. You’ll need to manually 
					create the custom recipient in your flow, and find <strong>posting instructions</strong> for this endpoint that tell 
					you things like what URL to POST your leads to, what fields are required, what optional fields you can 
					send, whether you need to send along a secret key, and what sort of response you can expect from their 
					server for successful and unsuccessful leads.</p>
					<p>To walk you through setting up a custom URL destination, this guide will show you how to send your leads to a mock URL 
					destination. This guide and our <a href="https://support.activeprospect.com/hc/en-us/articles/208828606-LeadConduit-Delivering-your-Leads" target="_blank">Knowledge Base article</a> 
					on deliveries will act as a template for you if you ever need to set up your own custom destination.</p>
					<p>If you’re learning how to setup a custom endpoint, use this mock URL endpoint as a placeholder for 
					learning purposes: <strong>http://www.mocky.io/v2/5900f11b1200000317c7b71f</strong>.</p>
					<p>To get started click the <strong>Add Recipient</strong> button. Click  
					<strong> create a new custom recipient</strong>. Give it a name, and click <strong>Next</strong>.</p>
					<p data-tip="Click to restart"><img onClick={this.resetGif.bind(this)} className="gif-background" src={this.state.gifShowing ? require('../images/new_createcustomdelivery.gif') : require('../images/new_createcustomdeliveryfalse.gif')} alt="Custom Delivery" /></p>
					<p>Next, you need to select your integration. This part might seem tricky if you don’t have much experience with HTTP. 
					But not to worry, there are a finite amount of ways to send data to an endpoint, and we've covered each of them in our 
					<a href="https://support.activeprospect.com/hc/en-us/sections/201013939-LeadConduit-Flows" target="_blank"> LeadConduit knowledge base</a>.</p>
					<p>For this guide, you will send a <strong>Custom Form POST</strong> to the mock CRM destination. Form POSTs 
					describe the way data is sent to the endpoint (the URL where the destination wants you to send leads). When 
					reading through the recipient's posting instructions in a real scenario, you’ll look to see what sort of format 
					the destination requires. The more common options for sending data include: Form POSTs, JSON POSTs, XML POSTs, 
					and Form GETs.</p>
					<p><strong>GET</strong> and <strong>POST</strong> describes the method of sending the data, and <strong>JSON</strong>, 
					<strong>FORM</strong>, <strong>XML</strong>, <strong>SOAP</strong> all describe the format of the data you’re sending. 
					There’s a good amount of information on the internet describing the differences between these methods and 
					formats, so we won’t go into much detail here. You just need to be aware of the differences, and pay 
					attention to how the <strong>posting instructions</strong> of your destination require you to send data.</p>
					<p>If you need to configure one of these options in the future, our knowledge base article 
					on <a href="https://support.activeprospect.com/hc/en-us/articles/216009923-LeadConduit-Outbound-Field-Mapping" target="_blank">outbound field mapping</a> is a helpful reference. 
					This guide goes into more details regarding outbound mapping in later sections.</p>
					<p>Select the <strong>Custom Form POST</strong> integration.</p>
					<img className="img-background" src={require('../images/deliveryintegrationselection.png')} alt="Integrations Selection" />
					<p>Next, begin configuring your recipient by clicking the <strong>Add Field Mappings</strong> button. This 
					is what you should see:</p>
					<img className="img-background" src={require('../images/initialoutboundmapping.png')} alt="Outbound Mappings" />
					<p>There's one field required and that's the URL we spoke about earlier. Here it is again: <strong>http://www.mocky.io/v2/5900f11b1200000317c7b71f</strong></p>
					<p>Copy and paste that URL into the box.</p>
					<img className="img-background" src={require('../images/mockendpointcustomdelivery.png')} alt="Endpoint for Custom Delivery" />
					<p>Your custom recipient now has a name, a method and format for sending leads, and a place to send those leads. </p>
					<h2>Next Steps</h2>
					<p>Depending on the type of integration you’re using, you may be finished setting up your lead recipient. There are still a few configuration options 
					available and sometimes necessary to properly set up a recipient. Ensuring that you’re sending all of the lead data you’ve collected to your destination 
					is the focus of the next section of this guide.</p>
					<div className="arrow-wrapper">
						<div className="inner-arrow-wrapper">
							<div className="back-arrow">
								<p data-tip="Step Criteria"><IconButton class_name="arrow" to="/step-criteria" name="angle-left" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
							<div className="forward-arrow">
								<p data-tip="Outbound Field Mapping"><IconButton class_name="arrow" to="/outbound-field-mapping" name="angle-right" /></p>
								<ReactTooltip place="bottom" type="dark" effect="float"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LeadDelivery;