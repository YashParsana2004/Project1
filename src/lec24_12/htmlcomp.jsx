import * as React from "react";

class HtmlComponent extends React.Component {
    render() {
        return (
            <div>
                <label>Textbox</label>
                <input type="text"/>
                <br />

                <label>CheckBox</label>
                <input type="checkbox" />
                <br />

                <label>Radio Button</label>
                <input type="radio" name="gender"/> Male
                <input type="radio" name="gender"/> Female
                <br />

                <label>Select Box</label>
                <select>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <br />

                <label>Textarea</label>
                <textarea rows="4" cols="50"/>
                <br />

                <label>File Upload</label>
                <input type="file"/>
                <br />

                <label>Color</label>
                <input type = "color" />
                <br />

                <label>Date</label>
                <input type="date"/>
                <br />

                <label>Time</label>
                <input type="time"/>
                <br />

                <label>Password</label>
                <input type="password"/>
                <br />

                <label>Number</label>
                <input type="number"/>
                <br />

                <label>Email</label>
                <input type="email"/>
                <br />

                <label>Url</label>
                <input type="url"/>
                <br />

                <label>Search</label>
                <input type="search"/>
                <br />

                <label>Range</label>
                <input type="range" min="0" max="100"/>
                <br />

                <button type="submit">Submit</button>

                <button type="reset">Reset</button>

                <button type="button" onClick={this.handleClick}>Click Me</button>
            </div>
            
        );
    }
}

export default HtmlComponent;