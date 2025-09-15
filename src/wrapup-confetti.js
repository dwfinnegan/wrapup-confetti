import { LitElement, css, html } from 'lit';
import { Desktop } from '@wxcc-desktop/sdk';
import confetti from 'canvas-confetti';


export class WrapupConfetti extends LitElement {
  static properties = {
    launchCount: { type: Number },
    launchDelay: { type: Number },
    wrapupId: { type: String }
  }

  canvas;
  myConfetti;


  constructor() {
    super();
    this.launchCount = 4;
    this.launchDelay = 250;
    this.wrapupId = '';
  }


  connectedCallback() {
    super.connectedCallback();
    this.initDesktopSDK();
  }


  async initDesktopSDK() {
    console.log('Wrapup-confetti: Init Desktop SDK');
    await Desktop.config.init({ widgetName: "wrapup-confetti", widgetProvider: "David Finnegan" });
    if (this.wrapupId) {
      Desktop.agentContact.addEventListener("eAgentContactWrappedUp", msg => this.handleContactEnded(msg));
    } else {
      console.log(`Wrapup-Confetti: Missing 'wrapupId' property`);
    }

  }


  handleContactEnded = (msg) => {
    const { wrapUpAuxCodeId } = msg.data;
    if (wrapUpAuxCodeId === this.wrapupId) this.shootConfetti();
  }


  shootConfetti() {
    const count = 200;
    const defaults = { origin: { y: 0.6 } };

    const fire = (particleRatio, opts) => {
      this.myConfetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    };

    for (let i = 0; i < this.launchCount; i++) {
      setTimeout(() => {
        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        fire(0.2, {
          spread: 60,
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });
      }, i * this.launchDelay);
    }
  }


  firstUpdated() {
    this.canvas = this.renderRoot.querySelector('#confetti-canvas');
    this.myConfetti = confetti.create(this.canvas, { resize: true });
  }


  render() {
    return html`
      <canvas id="confetti-canvas"></canvas>
    `
  }


  static get styles() {
    return css`
      :host {
        position: relative;
        display: block;
      }

      canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
      }
    `
  }
}

window.customElements.define('wrapup-confetti', WrapupConfetti)