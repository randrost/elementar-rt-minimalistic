import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageComponent } from '../shell/page/page';

@Component({
  selector: 'app-home',
  imports: [PageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <app-page title="Welcome" description="This is the Elementar RT minimalistic starter.">
      <div class="rounded-2xl border border-outline-variant bg-surface-container-low p-6">
        <p class="text-sm text-on-surface-variant">
          Shell layout (header + sidebar), color scheme toggle, and the auth screens are wired up.
          Add your own routes under <code class="rounded bg-surface-container px-1.5 py-0.5">src/app</code>
          and register them in <code class="rounded bg-surface-container px-1.5 py-0.5">app.routes.ts</code>
          and <code class="rounded bg-surface-container px-1.5 py-0.5">core/nav.ts</code>.
        </p>
      </div>
    </app-page>
  `
})
export class HomeComponent {}
