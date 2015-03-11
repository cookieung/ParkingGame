var BoardGame = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        console.log( 'GameLayer created' );
        console.log( 'Initialized' );
        
        this.ship = new Ship();
        this.ship.setPosition( new cc.Point( 200, 200 ) );
        
        this.addKeyboardHandlers();
        this.addChild( this.ship );
        this.ship.scheduleUpdate();

        return true;
    }

});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new BoardGame();
        layer.init();
        this.addChild( layer );
    }
});