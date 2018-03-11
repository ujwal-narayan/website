#include<stdio.h>
typedef long long int ll;
void swap (ll* a , ll* b)
{
	ll temp = *a;
	*a = *b;
	*b = temp;
	
}
heap_insert(ll a[], ll n)
{
	ll i;
        for(i=1;i<(n+1);i++)
        {
                ll k;
                scanf("%lld",&k);
                a[i]=k;
                ll j=i;
                while( j > 1 && a[j]>a[j/2])
                {
                        swap(a+j,a+j/2);
                        j=j/2;

                }
        }
        ll b[n];
	for(i=0;i<n;i++)
	{
		b[i]=a[i+1];
		a[i]=b[i];
	}
}
ll max(ll a[])
{
	return a[0];
}
ll heap_delete_top(ll a[],ll n)
{
	ll temp = a[0];
	a[0]=a[n-1];
	a[n-1]=a[0];
	n=n-1;
	ll i=0;
	while(a[i]<=a[2*i+1] || a[i] <= a[2*i+2])
	{
		if(2*i+1>n)
			break;
		if(2*i+2>n)
			break;
		if(a[2*i+2]>a[2*i+1])
		{
			swap(a+i,a+2*i+2);
			i=2*i+2;
		}
		else
		{
			swap(a+i,a+2*i+1);
			i=i*2+1;
		}
		

	}
	return n;
}
void printer(ll a[], ll n)
{
	ll i;
	 for(i=0;i<n;i++)
                printf("%lld ",a[i]);
        printf("\n");
	return;
}
void sort(ll a[], ll n)
{
	ll b[n];
	ll len=n;
	ll i=0;
	while(n>0)
	{
		b[i]=max(a);
		n=heap_delete_top(a,n);
		i=i+1;
	}
	for(i=0;i<len;i++)
		a[i]=b[i];
}
	
int main()
{
	ll a[100],n,i;
	scanf("%lld",&n);
	heap_insert(a,n);
	printer(a,n);
	sort(a,n);
        printer(a,n);
	
	return 0;
}
		
	
