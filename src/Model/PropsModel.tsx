export interface IconeCardModel{
title:string,
subTitle:string,
value:string,
icone:string,
footerData:string,
cardStyle:any
}


export interface ChartData {label:string,value: number}


export interface ExpenseModel{
    
        expenseDate: Date,
        expenseTitle: string,
        expenseAmout: number,
        
}

export interface ProductModel{
        name:string,
        stock:string,
        price:string,
        sales:string,
        image:string
}