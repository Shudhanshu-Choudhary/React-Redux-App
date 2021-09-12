const initialState = {
    loading: false,
     projects: [
                {id:1, title:"Front End Styling", user:"shudhanshu", content: "lorem ipsum lorem ipsum lorem"},
                {id:2, title:"Merge the Store", user:"shudhanshu", content: "lorem ipsum lorem ipsum lorem"},
                {id:3, title:"Created Root Reducer", user:"shudhanshu", content: "lorem ipsum lorem ipsum lorem"},
                {id:4, title:"Fix the user Info Bugs", user:"shudhanshu", content: "lorem ipsum lorem ipsum lorem"}
            ],
     error: ''
}

export const projectReducer = (state = initialState, action) => {
    return state
}