import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products (Sản phẩm)",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name (Tên sản phẩm)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (Slug)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Product Images (Ảnh sản phẩm)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "description",
      title: "description (Mô tả)",
      type: "blockContent",
    }),
    defineField({
      name: "categories",
      title: "Categories (Danh mục)",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    // defineField({
    //   name: "namevariant",
    //   title: "namevariant",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "namevariant" } }],
    // }),
    defineField({
      name: "stock",
      title: "Stock (Số lượng)",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    // defineField({
    //   name: "brand",
    //   title: "Brand",
    //   type: "reference",
    //   to: { type: "brand" },
    // }),

    defineField({
      name: "status",
      title: "Product Status (New, Hot, Sale)",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Hot", value: "hot" },
          { title: "Sale", value: "sale" },
        ],
      },
    }),
    defineField({
      name: "variant",
      title: "Product Type (Tên loại sản phẩm)",
      type: "string",
      options: {
        list: [
           { title: "Gadget (Thịt, Cá, Trứng, Hải sản)", value: "TMeat, Fish, Eggs, Seafood" },
  { title: "Vegetables, Tubers, Mushrooms, Fruits (Rau, Củ, Nấm, Trái cây)", value: "Vegetables, Tubers, Mushrooms, Fruits" },
  { title: "Beer, Soft Drinks (Bia, Nước ngọt)", value: "Beer, Soft Drinks" },
  { title: "All Kinds of Milk (Các loại sữa)", value: "All Kinds of Milk" },
  { title: "Rice, Flour, Dried Goods (Gạo, Bột, Đồ khô)", value: "Rice, Flour, Dried Goods" },
  { title: "Cooking Oil, Sauces, Spices (Dầu ăn, Nước chấm, Gia vị)", value: "Cooking Oil, Sauces, Spices" },
  { title: "Noodles, Vermicelli, Porridge, Pho (Mì, Bún, Cháo, Phở)", value: "Noodles, Vermicelli, Porridge, Pho" },
  { title: "Ice Cream, Yogurt (Kem, Sữa chua)", value: "Ice Cream, Yogurt" },
  { title: "All Kinds of Candies and Snacks (Kẹo và đồ ăn vặt các loại)", value: "All Kinds of Candies and Snacks" },
  { title: "Personal Care (Chăm sóc cá nhân)", value: "Personal Care" },
  { title: "Household Cleaning (Vệ sinh gia đình)", value: "Household Cleaning" },
  { title: "Mother and Baby Products (Đồ dùng mẹ và bé)", value: "Mother and Baby Products" },
  { title: "Household Items (Đồ gia dụng)", value: "Household Items" },
        ],
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product (Tạo sản phẩm nổi bật)",
      type: "boolean",
      description: "Toggle to Featured on or off",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images",
      subtitle: "price",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      const image = media && media[0];
      return {
        title: title,
        subtitle: `$${subtitle}`,
        media: image,
      };
    },
  },
});
