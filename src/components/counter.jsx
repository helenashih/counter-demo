import React, {Component} from 'react';

class Counter extends Component{
    state = {
        count: 0
        // tags: ['Test-tag1', 'Test-tag2', 'Test-tag3']
    };
    // constructor() {
    //    super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement = (product) => {
        console.log(product)
        this.setState({count: this.state.count + 1})
    }

    render()
    {
        return (
            <div>
                {/*
                {this.state.tags.length === 0 && 'Please create a new tag!'}
                {this.renderTags()}
                */}
            <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
            <button onClick={ () => this.handleIncrement({id: 1})}
                    className="btn btn-primary">Increment</button>
    </div>
    );
    }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
export default Counter;
{/* renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags.</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    */}


