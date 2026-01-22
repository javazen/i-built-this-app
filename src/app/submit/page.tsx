import SectionHeader from "@/components/common/section-header";
import ProductSubmitForm from "@/components/products/product-submit-form";
import { SparklesIcon } from "lucide-react";

export default function SubmitPage() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Submit Your Product"
          icon={SparklesIcon}
          description="Share your creation with the community. Your submission will be reviewed by our team."
        />
        <div className="max-w-2xl mx-auto">
          <ProductSubmitForm />
        </div>
      </div>
    </section>
  );
}