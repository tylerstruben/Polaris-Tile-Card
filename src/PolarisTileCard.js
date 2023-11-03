import { LitElement, html, css } from 'lit';

export class PolarisTileCard extends LitElement {
  static get properties() { 
  
    return {
      title: { type: String },
      color: { type: String },
      link: { type: String },
      cardimage: { type: String },
      subtext: { type: String }, 
      blockone: {type: Boolean, reflect : true}, 
      blocktwo: {type: Boolean, reflect : true}, 
      blockthree: {type: Boolean, reflect : true}, 
      blockfour: {type: Boolean, reflect : true}, 
      blockfive: {type: Boolean, reflect : true}, 
    };
  }

  static get styles() {
    return css`
      :host {
      
      }

  

      .subtext {
        font-size: 1rem;
        overflow: hidden; 
      }
    
      .card {
        background-color: #fff;
        box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
        align-items: center;
        display: flex;
        justify-content: start; 
        padding: 16px; 
        height: 350px; 
        width: 350px;
        gap: 16px;
        background-image: url(var(--card-background-image));
        position: relative;
      } 
      .card-title { 
        font-weight: bold; 
        
      }

      .link {
        font-weight: bold;
        color: #fff;
        text-decoration: none;
      }

      .svg-link {
        fill: none;
        bottom: 16px;
        right: 16px;
        position: absolute;
        transition: all .25s ease-in-out;
        transform-origin: bottom right;
      }

       .svg-link:hover{
        transform: scale(1.3333);
        transition: all .25s ease-in-out;
        transform-origin: bottom right;
      }

       .card[card-color="blue"] {
        background-color: #1e407c;
        color: #fff;
      }

      .card[card-color="fade"] {
        background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);;
        color: #fff;
      }

      .card[card-color="navy"] {
        background-color: #001836;
        color: #fff;
      }
      .white-hr {
        height: 4px;
        border: none;
        border-radius: 4px;
        background-color: #1e407c;
      }

      .white-text-wrapper {
        max-height: 100%;
        max-width: 100%;
        width: 75%;
        overflow: hidden;
      }
      .card-wrap-outer{ 
        width: fit-content; 
        
      }
      @media (min-width: 10px) {
        .card {
          height: 45vw;
        }
        .card-title {
          font-size: 1.5rem;
        }
      } 
      

      @media (min-width: 768px) {
        .card {
          height: 36vw;
          flex: 0 0 48%;
        }
        .card-title {
          font-size: 2rem;
        }
      }

      @media (min-width: 1080px) {
        .card {
          height: 24vw;
          flex: 0 0 32%;
        }
        .card-title {
          font-size: 2.5rem;
        }
      }
    `;
  }

  constructor() {
    super();
    this.color = 'white';
    this.title = "Enter title";
    this.link = "https://www.psu.edu/";
    this.cardimage = "";
  }

  render() {
    const hasLink = this.hasAttribute('link'); 
    const hasSubText = this.hasAttribute('subtext'); 


    if (hasLink) { 
      
      return html` 
      
      <div class="card-wrap-outer">

          <div class="card" card-title="${this.title}" card-color="${this.color}" style="background-image: linear-gradient(to right, rgba(0, 3, 33, 0.5), rgba(0, 3, 33, 0.5)), url(${this.cardimage})">
          <div class="card-title">${this.title}</div>  
         <a class = "svg-link"> <svg width="24" height="24" viewBox="0 0 24 24" fill="#CCE9FF">
          <path d="M4.22 22C3.61 22 3.09 21.78 2.65 21.35C2.22 20.91 2 20.39 2 19.78V4.22C2
                                 3.61 2.22 3.09 2.65 2.65C3.09 2.22 3.61 2 4.22 2H10.89C11.20 2 11.47 2.11 11.68 
                                 2.32C11.89 2.53 12 2.80 12 3.11C12 3.43 11.89 3.69 11.68 3.90C11.47 4.11 11.20 4.22 10.89 
                                 4.22H4.22V19.78H19.78V13.11C19.78 12.80 19.88 12.53 20.10 12.32C20.31 12.11 20.57 12 20.89 
                                 12C21.20 12 21.47 12.11 21.68 12.32C21.89 12.53 22 12.80 22 13.11V19.78C22 20.39 21.78 20.91
                                  21.35 21.35C20.91 21.78 20.39 22 19.78 22H4.22ZM8.67 15.33C8.46 15.13 8.36 14.87 8.36 14.56C8.36
                                   14.24 8.46 13.98 8.67 13.78L18.22 4.22H15.33C15.02 4.22 14.75 4.12 14.54 3.90C14.33 3.69 14.22 3.43
                                    14.22 3.11C14.22 2.80 14.33 2.53 14.54 2.32C14.75 2.11 15.02 2 15.33 2H20.89C21.20 2 21.47 2.11 
                                    21.68 2.32C21.89 2.53 22 2.80 22 3.11V8.67C22 8.98 21.89 9.25 21.68 9.46C21.47 9.67 21.20 9.78 
                                    20.89 9.78C20.57 9.78 20.31 9.67 20.10 9.46C19.88 9.25 19.78 8.98 19.78 8.67V5.78L10.19 15.36C9.99 
                                    15.56 9.74 15.67 9.44 15.67C9.14 15.67 8.89 15.56 8.67 15.33Z" fill="#CCE9FF"></path> </a> 
          </div> 

          
          
      
        
          
      
      `;
    } else if (hasSubText) {
      return html`
        <div class="card-wrap-outer">
          <div class="card" card-title="${this.title}" card-color="${this.color}">
            <div class="white-text-wrapper">
              <div class="card-title">${this.title}</div>
              <hr class="white-hr">
              <div class="subtext">${this.subtext}</div>
            </div> 
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="card-wrap-outer">
          <div class="card" card-title="${this.title}" card-color="${this.color}">
            <div class="card-title">${this.title}</div>
          </div>
        </div>
    `;
  }
}
}
