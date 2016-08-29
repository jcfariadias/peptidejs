(function(){

	this.PeptideModal = function( html, options ){

		var defaults = {
			className:'peptide-modal',
			layout:'default',
			closeButton: true,
			closeButtonSymbol:'x',
			width:'auto',
			minWidth:300,
			overlay:true
		}
		this.options = extendOptions(defaults, options); //Verify if defaults are overriden and set method options

		/*
        * If content is an HTML string, append the HTML string.
        * If content is a domNode, append its content.
        */
		if( typeof html === 'string' || typeof html === 'undefined'){
			this.html = html;
		} else {
			this.html = html.innerHTML;
		}

		this.open();

	}

	//Object prototype (extendable public methods)
	PeptideModal.prototype.open = function() {

		render.call(this)

	}

	//Private methods
	function extendOptions( defaults, options ){
		for (var opts in options) {
			if (options.hasOwnProperty(opts)) {
				defaults[opts] = options[opts];
			}
		}
		return defaults;
	}

	function render() {

		/**
		 * Create empty DOM Node to be appended to body
		 */
		var domFragment = document.createDocumentFragment();

		/*
		 * Create base HTML and fill with options
		 */
		this.modal = document.createElement("div");
	    this.modal.className = "peptide-modal";

		buildLayout.call(this);

        domFragment.appendChild(this.modal);
        domFragment.appendChild(this.overlay);

        document.body.appendChild(domFragment);

	}

	function buildLayout() {

		var options = this.options;

		this.layout = document.createElement("div");
		switch(options.layout){
			default:
				this.layout.className = "peptide-modal__"+this.options.layout;
				break;
		}

        if(options.overlay){
            addOverlay.call(this);
        }

		if(options.closeButton){
			this.closeButton = document.createElement('button');
			this.closeButton.className = "peptide-modal__close";
			this.closeButton.innerHTML = options.closeButtonSymbol;
			this.layout.appendChild(this.closeButton);
		}

        this.modal.appendChild(this.layout);

	}

    function addOverlay(){
        this.overlay = document.createElement("div");
        this.overlay.className = "peptide-modal-overlay ";
    }

}());
