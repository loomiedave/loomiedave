'use client';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { useId } from 'react';

function Collapsible(
  props: React.ComponentProps<typeof CollapsiblePrimitive.Root>
) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger(
  props: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>
) {
  const stableId = useId();
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      id={stableId}
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent(
  props: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>
) {
  const stableId = useId();
  return (
    <CollapsiblePrimitive.CollapsibleContent
      id={stableId}
      data-slot="collapsible-content"
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
