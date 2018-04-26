const Styles = { 
    
    wrapper: {
        width: '100%',
        height: '100%',
        maxWidth: 640,
        background: 'url(/assets/chatBackground.png)', 
        margin: '0 auto',
        fontFamily: 'Imprima',
        fontSize: 14
    },

    containerAuthor: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        fontFamily: 'Imprima'

    },

    inputAuthor: {
        width: '100%',
        textIndent: 8,
        borderRadius: 5        
    },

    buttonAuthor: {
        height: 30,
        width: 70,
        border: 0,
        borderRadius: '10%',
        backgroundColor: '#FF876E',
        color: '#FFF',
        marginTop: 10
    },

    validationText: {
        color: '#FF876E'
    },

    search: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#3898D4'
    },

    searchInput: {
        width: '100%',
        margin: 8,
        textIndent: 8,
        borderRadius: 5
    },

    searchButton: {
        height: 30,
        width: 50,
        margin: '8px 8px 8px 0',
        border: 0,
        borderRadius: '10%',
        backgroundColor: '#FF876E',
        color: '#FFF'
        
    },

    sentMsg: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    
    receivedMsg: {
        display: 'flex',
        justifyContent: 'flex-start'
    },

    msg: {
        backgroundColor: '#FCF6C5',
        width: 240,
        padding: 16,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 24,
        marginRight: 24,
        wordBreak: 'break-word'
    },

    sentMsgDetails: {
        backgroundColor: '#FCF6C5',
        width: 240,
        padding: 16,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 24,
        marginRight: 24,
        wordBreak: 'break-word'
    },
    
    receivedMsgDetails: {
        backgroundColor: '#FFF',
        width: 240,
        padding: 16,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 24,
        marginRight: 24,
        wordBreak: 'break-word'
    },

    msgAuthor: {
        color: '#CBD1D6'
    },

    msgText: {
        color: '#67737C'
    },

    msgDate: {
        color: '#CBD1D6',
        float: 'right'
    }


}

export default Styles;