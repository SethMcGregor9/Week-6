let expect = chai.expect;

describe('MyFunctions', function(){
    describe('#_playerName ', function() {
    it(' should return a players Name', function()
    {
        let _playerName = Name('Player 1', 'Player 2');
        expect(_playerName).to.equal('player 1', 'Player 2')

    });

    
    it('should throw an error if name is not a string', function() {
        expect(function() {
            _playerName('Player 1', 'Player 2');
        
        }).to.throw(Error);
    });
    });
});



