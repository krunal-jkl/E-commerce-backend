import { Router, json } from "express";

export default function (rootDirectory: string) {
    const router = Router();
    router.use(json());

    router.post("/admin/products", async (req, res) => {
        console.log('Called : ==========> ');
        const productService = req.scope.resolve("productService");
        const created = await productService.create({
           ...req.body
         });
        res.json(created);
    });
    return router;
}
