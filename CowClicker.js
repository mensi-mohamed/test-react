import React from 'react'
        import { render } from 'react-dom'
        var CowClicker = React.createClass({
            getInitialState: function () {
                return {
                    clicks: 0
                };
            },

            onCowClick: function (evt) {
                this.setState({clicks: this.state.clicks + 1});
            },
            onCowReset: function (evt) {
                this.setState({clicks: 0});
            },
            render() {
                return (
                        <div>
                            <div>Clicks: {this.state.clicks}</div>
                            <img src="http://s3.bypaulshen.com/buildwithreact/cow.png" 
                                 onClick={this.onCowClick}/>
                            <div>
                                <button onClick={this.onCowReset}>reset</button>
                            </div>
                        
                                                
                                        
                        </div>
                        );
            }
        });
export default CowClicker;