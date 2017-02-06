var ITEMS = []

var TodoList = React.createClass({
	getInitialState: function() {
    	return {
      		items: [] //empty array
    	};
  	},


    addItem: function (e) {
    	var itemArray = this.state.items;
		if (this._inputElement.value !== "") {
			itemArray.push(
			    {
			      text: this._inputElement.value,
			      key: Date.now()
			    }
			);
			 
			this.setState({
			    items: itemArray
			});
		}
		 
		this._inputElement.value = "";

		e.preventDefault(); 
 
	},

	remove: function(i){
		console.log("in TodoList");
	    var itemArray = this.state.items;
	   

	    if (itemArray.indexOf(i) > -1) {
	    	console.log("in if")
	    	itemArray.splice(itemArray.indexOf(i), 1);
	    }

	    this.setState({ 
	    	items: itemArray
	    });

	},

  	render: function () {
	    return (
	    	<div className="todoListMain">
	      		<div className="header">
	      			Simple To Do List
	        		<form onSubmit={this.addItem}>
	          			<input ref={(a) => this._inputElement = a}
	                 		placeholder="enter to do">
	          			</input>
	          			<button type="submit">add</button>
	        		</form>
	      		</div>
	      	<TodoItems entries={this.state.items} onRemove={this.remove}/>
	    </div>
	  );
	}
});

var TodoItems = React.createClass({


	render: function() {
		console.log(this.props.entries);
	    var listItems = this.props.entries.map(function(item) {
	    	return ( 

	    		<li key={item.key}>{item.text}<button className="remove" onClick={this.props.onRemove.bind(this, item)}>X</button></li>
	    	);
	    }.bind(this));  //why do I have to bind again here? Is this binding to the TodoList?
  	
	    return (
	      <ul className="theList">
	        {listItems}
	      </ul>
	    );
  	}	
});

ReactDOM.render(
  <div>
  	<TodoList />
  </div>,
  document.getElementById('content')
);