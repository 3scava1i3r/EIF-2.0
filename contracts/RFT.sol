pragma solidity >= 0.7.1;

import '../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract RFT is ERC20 {
    uint public icoshareprice;
    uint public icosharesupply;
    uint public icoend;
    
    uint public nftid;
    IERC721 public nft;
    IERC20 public DAI;
    
    address public admin;
    
    constructor (
        string memory _name,
        string memory _symbol,
        address _nftaddress,
        uint _nftid,
        address _DAIAddress,
        uint _icosharesupply,
        uint _icoshareprice
        
        )
    
        ERC20(_name,_symbol)
        
        {
            nftid = _nftid;
            nft = IERC721(_nftaddress);
            icosharesupply = _icosharesupply;
            icoshareprice = _icoshareprice;
            DAI = IERC20(_DAIAddress);
            admin = msg.sender;
            
        }
        
        function startIco() external {
            require(msg.sender == admin , 'not admin' );
            nft.transferFrom(msg.sender , address(this) , nftid);
            icoend = block.timestamp + 84600; 
            
        }
        
        function buyShare(uint shareamount) external {
            require(icoend > 0 , 'ICO not started yet');
            require(block.timestamp <= icoend , 'ICO ended');
            require( totalSupply() + shareamount <= icosharesupply , 'not enough left');
            
            uint daiAmount = shareamount * icoshareprice ;
            DAI.transferFrom(msg.sender , address(this) , daiAmount);
            _mint(msg.sender , shareamount);
        }
        
        
        function withdraw() external{
            require(msg.sender == admin , 'not admin' );
            require(block.timestamp > icoend , 'ICO not ended');
            uint daibalance = DAI.balanceOf(address(this));
            if(daibalance > 0){
                DAI.transfer(msg.sender , daibalance);
            }
            uint unsoldshare = icosharesupply - totalSupply();
            if(unsoldshare > 0){
                _mint(msg.sender , unsoldshare);
            }
        }
        
        
        
}