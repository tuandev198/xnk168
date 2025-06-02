import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "description",
      title: "description",
      type: "blockContent",
    }),
    defineField({
      name: "price", 
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "categories",
      title: "Categories",
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
      title: "Stock",
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
      title: "Product Status",
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
      title: "Product Type",
      type: "string",
      options: {
        list: [
          { title: "Gadget", value: "TMeat, Fish, Eggs, Seafood" },
          { title: "Vegetables, Tubers, Mushrooms, Fruits", value: "Vegetables, Tubers, Mushrooms, Fruits" },
          { title: "Beer, Soft Drinks", value: "Beer, Soft Drinks" },
          { title: "All Kinds of Milk", value: "All Kinds of Milk" },
          { title: "Rice, Flour, Dried Goods", value: "Rice, Flour, Dried Goods" },
          { title: "Cooking Oil, Sauces, Spices", value: "Cooking Oil, Sauces, Spices" },
          { title: "Noodles, Vermicelli, Porridge, Pho", value: "Noodles, Vermicelli, Porridge, Pho" },
          { title: "Ice Cream, Yogurt", value: "Ice Cream, Yogurt" },
          { title: "Ice Cream, Yogurt", value: "Ice Cream, Yogurt" },
          { title: "All Kinds of Candies and Snacks", value: "All Kinds of Candies and Snacks" },
          { title: "Personal Care", value: "Personal Care" },
          { title: "Household Cleaning", value: "Household Cleaning" },
          { title: "Mother and Baby Products", value: "Mother and Baby Products" },
          { title: "Household Items", value: "Household Items" },
        ],
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product",
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
