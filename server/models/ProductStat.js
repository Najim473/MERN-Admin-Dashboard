import mongoose from "mongoose";

const ProductStateSchema = new mongoose.Schema(
    {
        ProductId: String,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyDate: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        dailyData: {
            date: String,
            totalSales: Number,
            totalUnits: Number,
        },
    },
    { timestamps: true }
);

const ProductState = mongoose.model("ProductState", ProductStateSchema);
export default ProductState;
