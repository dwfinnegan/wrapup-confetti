# WxCC Wrapup-Confetti

This project serves as a fun and interactive example designed to help users explore the capabilities of the Cisco WebEx Contact Center SDK. It demonstrates how you can detect a wrapup event within agent desktop and trigger a celebratory animation, such as throwing confetti when a specific wrapup code is encountered. While this example uses a visual effect to highlight the event, the same approach can be applied to trigger other actions, such as making an API call to a CRM system or integrating with other business applications. This makes the project a practical starting point for learning how to connect Webex Contact Center events to a variety of workflows and external systems.

## [Watch the Video: Wrapup-Confetti Widget](https://app.vidcast.io/share/d0c0e7aa-b45a-4321-8958-b928e09c9403)

Example Use Cases:

  - Celebrate successful customer resolutions with on-screen effects.
  - Automatically update customer information in a CRM when a call is wrapped up.
  - Trigger custom notifications or actions in other business tools.


Note:
This project is intended for demonstration and educational purposes, making it easy to experiment with and extend for your own integration ideas.

## Getting Started
If you wish to run the widget without making any changes, use the pre-built version located in the dist folder and start with step six. Alternatively, follow the instructions below to build and deploy the widget.

1. Download this project or ```git clone https://github.com/dwfinnegan/wrapup-confetti```
2. From the project directory run ```npm install```
3. Modify the code to suit your needs
4. Run ```npm run build``` to build the widget
   - The build process dumps the output in the dist folder
5. Rename the file to your needs, but I would suggest wrapup-confetti.js 
6. Copy the file wrapup-confetti.js to your preferred cloud storage platform
7. Add the widget to your Desktop Layout Advanced Header section (example snippet below). 
8. Define the following properties on the widget
   - wrapupId: id of the wrapup code to trigger confetti (required)
   - launchCount: amount of confetti to throw (optional default: 4)
   - launchDelay: delay in ms between each throw (optional default: 250)

<pre lang="JSON">
  "advancedHeader": [
    {
      "comp": "wrapup-confetti",
      "properties": {
        "wrapupId": "0e808ebd-38ee-4cfd-h163-0809h80s3468",
        "launchCount": 4,
        "launchDelay": 250
      },
      "script": "https://some-storeage-path/wrapup-confetti.js"
    }
  ]
</pre>