
import { WebUserDetailStore } from './web-user-detail.store'
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MatDrawer } from '@angular/material/sidenav'
import { map, Subject, takeUntil, tap } from 'rxjs'
import { FuseNavigationItem } from '@fuse/components/navigation'
import { FuseMediaWatcherService } from '@fuse/services/media-watcher'
import { User } from '@case-clinical/web/core/data-access'

@Component({
  templateUrl: `./web-user-detail.component.html`,
  providers: [WebUserDetailStore],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebUserDetailComponent implements AfterViewInit {
  @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer
  drawerMode: 'side' | 'over'
  drawerOpened: boolean
  menuData: FuseNavigationItem[] = []
  private _unsubscribeAll: Subject<any> = new Subject<any>()
  private _item: User
  readonly vm$ = this.store.vm$

  constructor(
    private readonly store: WebUserDetailStore,
    private readonly route: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseMediaWatcherService: FuseMediaWatcherService,
  ) {}
  ngAfterViewInit(): void {
    var routeString: string = this.route.snapshot.pathFromRoot.map((r)=> r.url).join('/').replace('//','/')

    this.vm$
      .pipe(
        tap((s) => {
          if(s?.item?.id != undefined) {
          this.menuData = [
            {
              id: 'Details',
              title: 'User Details',
              type: 'group',
              children: [

                {
                  id: 'details.overview',
                  title: 'Overview',
                  type: 'basic',
                  link: `${routeString}/overview`,
                },
{
                  id: 'details.assignedDocument',
                  title: 'Assigned Documents',
                  type: 'basic',
                  link: `${routeString}/assigned-documents`,

                },
{
                  id: 'details.attorney',
                  title: 'Attorneys',
                  type: 'basic',
                  link: `${routeString}/attorneys`,

                },
{
                  id: 'details.caseAccount',
                  title: 'Case Accounts',
                  type: 'basic',
                  link: `${routeString}/case-accounts`,

                },
{
                  id: 'details.chat',
                  title: 'Chats',
                  type: 'basic',
                  link: `${routeString}/chats`,

                },
{
                  id: 'details.document',
                  title: 'Documents',
                  type: 'basic',
                  link: `${routeString}/documents`,

                },
{
                  id: 'details.legalCase',
                  title: 'Legal Cases',
                  type: 'basic',
                  link: `${routeString}/legal-cases`,

                },
{
                  id: 'details.message',
                  title: 'Messages',
                  type: 'basic',
                  link: `${routeString}/messages`,

                },
{
                  id: 'details.navigation',
                  title: 'Navigations',
                  type: 'basic',
                  link: `${routeString}/navigations`,

                },
{
                  id: 'details.notification',
                  title: 'Notifications',
                  type: 'basic',
                  link: `${routeString}/notifications`,

                },
{
                  id: 'details.priorAuthorizationRequest',
                  title: 'Prior Authorization Requests',
                  type: 'basic',
                  link: `${routeString}/prior-authorization-requests`,

                },
{
                  id: 'details.priorAuthorizationRequest',
                  title: 'Prior Authorization Requests',
                  type: 'basic',
                  link: `${routeString}/prior-authorization-requests`,

                },
{
                  id: 'details.setting',
                  title: 'Settings',
                  type: 'basic',
                  link: `${routeString}/settings`,

                },
{
                  id: 'details.shortcut',
                  title: 'Shortcuts',
                  type: 'basic',
                  link: `${routeString}/shortcuts`,

                },
{
                  id: 'details.teamUser',
                  title: 'Team Users',
                  type: 'basic',
                  link: `${routeString}/team-users`,

                },
{
                  id: 'details.userCourseProgress',
                  title: 'User Course Progresses',
                  type: 'basic',
                  link: `${routeString}/user-course-progresses`,

                },
{
                  id: 'details.userFeature',
                  title: 'User Features',
                  type: 'basic',
                  link: `${routeString}/user-features`,

                },
{
                  id: 'details.userFeaturePermission',
                  title: 'User Feature Permissions',
                  type: 'basic',
                  link: `${routeString}/user-feature-permissions`,

                },
{
                  id: 'details.userRole',
                  title: 'User Roles',
                  type: 'basic',
                  link: `${routeString}/user-roles`,

                }
              ],
            },
          ]
        }
      }),
      )
      .subscribe()
  }

  ngOnInit(): void {
    // Subscribe to media query change
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {
        // Set the drawerMode and drawerOpened
        if (matchingAliases.includes('md')) {
          this.drawerMode = 'side'
          this.drawerOpened = true
        } else {
          this.drawerMode = 'over'
          this.drawerOpened = false
        }

        // Mark for check
        this._changeDetectorRef.markForCheck()
      })
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null)
    this._unsubscribeAll.complete()
  }

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteUserEffect(item)
    }
  }
}

