import React, { Component } from 'react';
import Modal from './modal';

const Email = {
	send: function(a) {
		return new Promise(function(n, e) {
			a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
			var t = JSON.stringify(a);
			Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
				n(e)
			})
		})
	},
	ajaxPost: function(e, n, t) {
		var a = Email.createCORSRequest("POST", e);
		a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
			var e = a.responseText;
			null != t && t(e)
		}, a.send(n)
	},
	ajax: function(e, n) {
		var t = Email.createCORSRequest("GET", e);
		t.onload = function() {
			var e = t.responseText;
			null != n && n(e)
		}, t.send()
	},
	createCORSRequest: function(e, n) {
		var t = new XMLHttpRequest;
		return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
	}
};

class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            id: ""
        }
        this.mailContent = [
            {
                id: "1",
                subject: "first mail",
                content: "first mail - Content",
                date: "08/08/2019"
            },
            {
                id: "2",
                subject: "Second mail",
                content: "Second mail - Content",
                date: "08/08/2019"
            },
            {
                id: "3",
                subject: "Third mail",
                content: "Third mail - Content",
                date: "08/08/2019"
            }
        ];
        this.getRowContent = this.getRowContent.bind(this);
        this.openMailContent = this.openMailContent.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    openMailContent() {
        return this.mailContent.map(item => {
            if (item.id === this.state.id) {
                return (
                   <Modal toggleModal={this.toggleModal} {...item} title={item.subject} />
                );
            }
        });
    }

    sendMail() {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "tomgeorge12@gmail.com",
            Password : "a3d43a8a-6537-46d0-beed-5dc31b0e1fab",
            To : 'tomgeorge12@gmail.com',
            From : "tomgeorge12@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }

    composeMail() {
        const _content = (
            <div>
                <span>{'To : '}</span>
                <input type="text" className="form-control" />
                <span>{'Cc : '}</span>
                <input type="text" className="form-control" />
                <span>{'Bcc : '}</span>
                <input type="text" className="form-control" />
                <span>{'Body : '}</span>
                <input type="text" className="form-control" />
                <button>{'Send'}</button>
            </div>
        );
        const contents = {
            content: _content,
            title: 'Compose Mail'
        }
        return (
            <Modal toggleModal={this.toggleModal} {...contents} />
        );
    }

    toggleModal(value, id = "") {
        this.setState({ showModal: value, id })
    }

    getRowContent() {
        return this.mailContent.map((item)=>{
            return(
                <tr>
                    <td>{item.id}</td>
                    <td onClick={()=> {this.toggleModal("content", item.id)}}>{item.subject}</td>
                    <td>{item.date}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className='container'>
                <input type='text' className="form-control" placeholder='Search Mail' />
                <table className='table'>
                    {this.getRowContent()}
                </table>
                <button className="btn btn-danger" onClick={() => this.toggleModal("compose", "", )}>{'Compose'}</button>
                {this.state.showModal === "content" ? this.openMailContent() : ''}
                {this.state.showModal === "compose" ? this.composeMail() : ''}
            </div>
        );
    }
}

export default dashboard;