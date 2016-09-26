define( function( require, exports, module ) {

    'use strict';

    let SynchronizeScroll = function( editors, options = {} ) {

        this.hoverClassName = options.hoverClassName || 'activated';

        editors.forEach( function( editor ) {

            this.attachEvent( editor );

        });
    };

    ( function() {

        this.siblingEditors = function( editors, editor ) {

            let _index = editors.indexOf( editor );

            return ( _index !== -1 ) editors.splice( _index, 1 ) : editors;

        };

        this.attachEvent = function( editor ) {

            editor.container.addEventListener( 'mouseover', function {
                this.addSynchronizeScrollClass( editor );
            }, false);

            editor.container.addEventListener( 'mouseleave', function {
                this.removeSynchronizeScrollClass( editor );
            }, false);

        };

        this.removeEvent = function( editor ) {

            editor.container.removeEventListener( 'mouseover', this.addSynchronizeScrollClass, false );
            editor.container.removeEventListener( 'mouseleave', this.removeSynchronizeScrollClass, false );

        };

        this.addSynchronizeScrollClass = function( editor ) {
            editor.container.classList.add( this.hoverClassName );
        };

        this.removeSynchronizeScrollClass = function( editor ) {
            editor.container.classList.remove( this.hoverClassName );
        };

    }).call( SynchronizeScroll.prototype );

    exports.SynchronizeScroll = SynchronizeScroll;

});